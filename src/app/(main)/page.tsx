"use client";

import { useEffect, useState, Suspense } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar, Typography } from "@mui/material";
import axios from "axios";

const Home = () => {
    const [position, setPosition] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);

    interface Shop {
        id: string;
        photo: { pc: { l: string | null } };
        name: string;
        address: string;
    }

    const [shopList, setShopList] = useState<Shop[]>([]);

    useEffect(() => {
        const getCurrentPosition = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        if (!position.coords) {
                            throw new Error("position.coords is null");
                        }
                        const newPos = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        };
                        setPosition(newPos);
                    },
                    (error) => {
                        console.error(error);
                    }
                );
            }
        };

        getCurrentPosition();
    }, []); // 空配列を指定しているので、このエフェクトは初回レンダー時に一度だけ実行される

    useEffect(() => {
        if (position === null) return;

        axios
            .get(`api/shop/?lat=${position.latitude}&lng=${position.longitude}`)
            .then((res) => {
                if (!res.data.results) {
                    throw new Error("res.data.results is null");
                }
                setShopList(res.data.results.shop);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [position]); // positionが更新されるたびにgetShopListを実行

    return (
        <>
            <div className="max-w-2xl mx-auto">
                {Array.isArray(shopList) &&
                    shopList.map((shop) => (
                        <Card key={shop.id} sx={{ m: 1 }}>
                            <CardContent>
                                <div className="flex">
                                    <Avatar
                                        src={shop.photo.pc.l || undefined}
                                        alt={`${shop.name}の写真`}
                                        sx={{ width: 100, height: 100 }}
                                        className="mr-4"
                                    />
                                    <div>
                                        <Typography variant="h6">
                                            {shop.name}
                                        </Typography>
                                        <Typography variant="body2">
                                            {shop.address}
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
            </div>
        </>
    );
};

export default Home;
