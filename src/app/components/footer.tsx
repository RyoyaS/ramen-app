"use client";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from "@mui/icons-material/Person";

function Footer() {
    return (
        <footer className="bg-white sticky top-0 z-50 border-gray-200">
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
        </footer>
    );
}

export default Footer;
