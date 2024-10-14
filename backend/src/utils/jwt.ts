import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { findUserBySlug } from '../services/user';
import { ExtendedRequest } from '../types/extended-request';

export const createJWT = (slug: string) => {
    return jwt.sign({ slug }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
};

export const verifyJWT = (req: ExtendedRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers['authorization'];
    
    if (!authHeader) {
        res.status(401).json({ error: 'Não autorizado' });
        return;  
    }

    const token = authHeader.split(' ')[1];  

    jwt.verify(token, process.env.JWT_SECRET as string, async (error, decoded: any) => {
        if (error) {
            return res.status(401).json({ error: 'Token inválido ou expirado' });
        }

        const user = await findUserBySlug(decoded.slug);
        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        
        req.userSlug = user.slug;
        next();  
    });
};
