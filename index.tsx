import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// デバイスの型定義
type Device = {
    device_id: number; // デバイスのID
    device_name: string; // デバイスの名前
    price: number; // デバイスの価格
    image_url: string; // デバイスの画像URL
};
