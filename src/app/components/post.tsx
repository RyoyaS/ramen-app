import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@mui/material";
function Post() {
    return (
        <Card sx={{ maxWidth: 500 }} className="mx-auto mt-2 mb-2">
            <CardHeader
                avatar={<Avatar></Avatar>}
                title="Ramen"
                subheader="aaa"
            />
            <CardMedia
                component="img"
                height="194"
                width="194"
                image="/802740.webp"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Post;
