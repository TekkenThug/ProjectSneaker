import nodeAPI from '@/configs/axios';

export default function getSneakers() {
  return nodeAPI.get('/sneakers')
    .then((res) => {
      console.log(res);
    });
}
