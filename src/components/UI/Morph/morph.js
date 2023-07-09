import React, { useState, useRef, useEffect } from 'react';
import classes from './morph.module.css';
import filtersClass from './filters.module.css';

/* https://alvarotrigo.com/blog/css-text-animations */

const Morph = (props) => {
    const brand1 = useRef();
    const brand2 = useRef();
    const txtProduct = useRef();
    const txtProduct2 = useRef();
    const filters = useRef();
    const threshold = useRef();

    const brands = props.brands;

    const [img1, setImg1] = useState(null);
    const [img2, setImg2] = useState(null);

    const [color1, setColor1] = useState(null);
    const [color2, setColor2] = useState(null);

    const [product, setProduct] = useState(null);
    const [product2, setProduct2] = useState(null);

    const [productColor, setProductColor] = useState(null);
    const [productColor2, setProductColor2] = useState(null);

    const morphTime = 1;
    const cooldownTime = 0.35;

    let brandIndex = brands.length - 1;

    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    const doMorph = () => {
        morph -= cooldown;
        cooldown = 0;

        let fraction = morph / morphTime;

        if (fraction > 1) {
            cooldown = cooldownTime;
            fraction = 1;
        }

        setMorph(fraction);
    }

    const setMorph = (fraction) => {
        brand2.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        brand2.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        txtProduct2.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        txtProduct2.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;

        brand1.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        brand1.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        txtProduct.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        txtProduct.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        setImg1(brands[brandIndex % brands.length].image);
        setColor1(brands[brandIndex % brands.length].class);
        setImg2(brands[(brandIndex + 1) % brands.length].image);
        setColor2(brands[(brandIndex + 1) % brands.length].class);
        setProduct(brands[brandIndex % brands.length].product);
        setProductColor(brands[brandIndex % brands.length].color);
        setProduct2(brands[(brandIndex + 1) % brands.length].product);
        setProductColor2(brands[(brandIndex + 1) % brands.length].color);
    }

    const doCooldown = (fraction) => {
        morph = 0;

        brand2.current.style.filter = "";
        brand2.current.style.opacity = "100%";
        txtProduct2.current.style.filter = "";
        txtProduct2.current.style.opacity = "100%";

        brand1.current.style.filter = "";
        brand1.current.style.opacity = "0%";
        txtProduct.current.style.filter = "";
        txtProduct.current.style.opacity = "0%";
    }

    const animate = () => {
        requestAnimationFrame(animate);

        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                brandIndex++;
            }

            doMorph();
        } else {
            doCooldown();
        }
    }

    useEffect(() => {
        animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`${classes.morph} ${props.className}`}>
            <div className={classes.container}>
                <span
                    ref={brand1}
                    id="brand1"
                    className={classes.brand}
                >
                    <img className={filtersClass[color1]} src={img1} alt="" />
                </span>
                <span
                    ref={brand2}
                    id="brand2"
                    className={classes.brand}
                >
                    <img className={filtersClass[color2]} src={img2} alt="" />
                </span>
                <div
                    ref={txtProduct}
                    id="txtProduct"
                    className={`${classes.brand} ${classes.product}`}
                    style={{color: productColor}}
                >
                    {product}
                </div>
                <div
                    ref={txtProduct2}
                    id="txtProduct2"
                    className={`${classes.brand} ${classes.product}`}
                    style={{color: productColor2}}
                >
                    {product2}
                </div>
            </div>

            <svg ref={filters} id="filters">
                <defs>
                    <filter ref={threshold} id="threshold">
                        <feColorMatrix in="SourceGraphic" type="matrix"
                            values="1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 255 -140"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default Morph;