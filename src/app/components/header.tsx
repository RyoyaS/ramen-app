"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button, ButtonGroup, Typography } from "@mui/material";

function Header() {
    const pathname = usePathname();
    let isHome = false;
    if (pathname === "/") {
        isHome = true;
    }

    return (
        <header className="bg-white sticky top-0 z-50 border-gray-200">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/">
                        <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
                            Ramen Snap
                        </Typography>
                    </Link>
                    <ButtonGroup
                        color="primary"
                        aria-label="outlined primary button group"
                    >
                        <Button>
                            <Link
                                href="/post/all"
                                style={{
                                    color: !isHome ? "black" : "gray",
                                }}
                            >
                                投稿
                            </Link>
                        </Button>
                        <Button>
                            <Link
                                href="/"
                                style={{ color: isHome ? "black" : "gray" }}
                            >
                                近くの店
                            </Link>
                        </Button>
                    </ButtonGroup>
                </div>
            </nav>
        </header>
    );
}

export default Header;
