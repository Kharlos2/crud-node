import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handler';

const getBlog = (req:Request, res:Response) => {
    try {
    } catch (e) {
        handleHttp(res, 'ERROR_GET_Blog')
    }
}

const getBlogs = (req:Request, res:Response) => {
    try {
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BlogS')
    }
}

const updateBlog = (req:Request, res:Response) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_Blog')
    }
}

const postBlog = ( { body } :Request, res:Response) => {
    try {
        res.send(body);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_Blog')
    }
}

const deleteBlog = (req:Request, res:Response) => {
    try {
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_Blog')
    }
}

export { getBlog, getBlogs, updateBlog, postBlog, deleteBlog };