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