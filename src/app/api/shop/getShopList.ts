import axios from "axios";

export async function getShopList(lat: number, lng: number) {
    const url = `${process.env.NEXT_PUBLIC_URL}?lat=${lat}&lng=${lng}`;
    const res = await axios.get(url);
    return res.data;
}
