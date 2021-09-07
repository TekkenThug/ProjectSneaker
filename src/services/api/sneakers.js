import nodeAPI from "@/configs/axios";

export function getSneakers() {
    return nodeAPI.get('/sneakers')
        .then(res => {
            console.log(res);
        });
}