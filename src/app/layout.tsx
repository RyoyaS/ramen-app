import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from "@mui/icons-material/Person";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ramen Sanp",
    description: "ラーメン検索SNS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
            <BottomNavigation className="sticky bottom-0 border-gray-200">
                <BottomNavigationAction
                    label="Search"
                    value="search"
                    icon={<SearchIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />

                <BottomNavigationAction
                    label="Add"
                    value="add"
                    icon={<AddCircleIcon />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon />}
                />
                <BottomNavigationAction
                    label="Person"
                    value="person"
                    icon={<PersonIcon />}
                />
            </BottomNavigation>
        </html>
    );
}
