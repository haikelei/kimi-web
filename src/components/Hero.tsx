'use client';
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import { Container } from '@/components/Container';
import { Link } from '@chakra-ui/react';

export const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          backgroundColor: 0xffffff, // 白色背景
          skyColor: 0x90d2f0, // 更亮的天蓝色
          cloudColor: 0xcad9ef, // 更亮的云颜色
          cloudShadowColor: 0x335780, // 更亮的云影颜色
          sunColor: 0xffcc33, // 更亮的太阳颜色
          sunGlareColor: 0xff9966, // 更亮的太阳眩光颜色
          sunlightColor: 0xffcc66, // 更亮的阳光颜色
          speed: 1,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="relative w-full h-[calc(100vh-100px)] bg-background"
    >
      <div className="absolute inset-0 bg-primary bg-opacity-30"></div>
      <Container className="relative z-10 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-secondary mb-6 tracking-wide drop-shadow-lg">
          尊享至臻飞行体验
        </h1>
        <p className="text-xl md:text-2xl text-background mb-12 max-w-2xl drop-shadow-md">
          升舱为您精选全球顶级商务舱，开启您的品质旅程
        </p>
        <Link
          href="/feeds"
          className="text-xl md:text-2xl text-primary font-medium hover:text-secondary transition duration-300"
        >
          <button className="bg-secondary text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition duration-300 shadow-lg transform hover:scale-105">
            探索优选 →
          </button>
        </Link>
      </Container>
    </div>
  );
};
