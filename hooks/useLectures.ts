import {useQuery} from 'react-query';

const useLectures = () => {
    
return  useQuery('lecture_list', () => {
    return fetch('url').then((res) => {
        return res.json()
    }).then((res) => {
        return res
    })
})
}

export default useLectures