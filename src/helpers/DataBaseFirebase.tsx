import {app} from "./AuthFirebase";
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import { useState, useEffect  } from 'react';

const database = getDatabase(app);

export const addNewBlog = (info) => {
    const db = getDatabase();
    const blogDatas = ref(db, "movie");
    const newBlogRef = push(blogDatas);
    if (info) {
        set((newBlogRef), {
            user: info.user,
            comment: info.comment,
            movieId: info.movieId
        })
    }
}

export const useData = (setCommentData) => {
    // const commentData = []
    // const [commentData, setCommentData] = useState([]);
    const db = getDatabase();
    const userRef = ref(db, "movie");
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        const commentArray = [];
        for (let id in data) {
            commentArray.push({ id, ...data[id] })
        }
        setCommentData(commentArray);

    });
}

// export const GetDetailsData = (id) => {
//     const [details, setDetails] = useState();
//     useEffect(() => {
//         const db = getDatabase();
//         const detailsRef = ref(db, "blog/" + id);
//         onValue(detailsRef, (snapshot) => {
//             const details = snapshot.val();
//             setDetails(details)
//         })
//     }, [id])
//     return { details }
// }

// export const DeleteUser = (id, navigate) => {
//     const db = getDatabase();
//     const userRef = ref(db, "blog");
//     remove(ref(db, "blog/" + id));
//     navigate("/");
//     toastWarnNotify("Blog is deleted")
// }

// export const EditUser = (info, currentUserId) => {
//     if (info) {
//         const db = getDatabase();
//         const updates = {};
//         updates["blog/" + info.id] = info;
//         return update(ref(db), updates);
//     }
// }