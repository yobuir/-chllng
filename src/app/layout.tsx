import type { Metadata } from "next";

import React from 'react'; 
import "./globals.css";

import { AntdRegistry } from '@ant-design/nextjs-registry'; 

export const metadata: Metadata = {
  title: "Mark8",
  description: "An online marketplace that allows users to buy and sell products, manage their inventory and process orders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative"><AntdRegistry>{children} </AntdRegistry></body>
    </html>
  );
} 