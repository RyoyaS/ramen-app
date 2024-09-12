"use client";

import { useEffect, useState, Suspense } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Avatar, Typography } from "@mui/material";

const Home = () => {
    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0,
    });

    const [shopList, setShopList] = useState([]);

    useEffect(() => {
        const getCurrentPosition = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const newPos = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                    setPosition(newPos);
                });
            }
        };

        getCurrentPosition();
    }, []); // 空配列を指定しているので、このエフェクトは初回レンダー時に一度だけ実行される

    useEffect(() => {
        const getShopList = async () => {
            if (position.latitude !== 0 && position.longitude !== 0) {
                const url = `${process.env.URL}?lat=${position.latitude}&lng=${position.longitude}`;
                const res = await axios.get(url);
                console.log(res);
                setShopList(res.data); // データを保存
            }
        };

        getShopList();
    }, [position]); // positionが更新されるたびにgetShopListを実行

    return (
        <div className="max-w-2xl mx-auto">
            {Array.isArray(shopList) &&
                shopList.map((shop) => (
                    <Card key={shop.id} sx={{ m: 1 }}>
                        <CardContent>
                            <div className="flex">
                                <Avatar
                                    src={shop.photo.pc.l}
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
    );
};

export default Home;
