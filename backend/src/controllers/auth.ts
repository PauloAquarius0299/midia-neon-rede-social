import { RequestHandler } from "express"
import { signupSchema } from "../schemas/signup";
import { createUser, findUserByEmail, findUserBySlug } from "../services/user";
import slug from "slug";
import { hash } from "bcrypt-ts";
import { createJWT } from "../utils/jwt";

export const signup: RequestHandler = async (req, res) => {
    const safeData = signupSchema.safeParse(req.body);
    if (!safeData.success) {
        return res.status(400).json({ error: safeData.error.flatten().fieldErrors });
    }

    const hasEmail = await findUserByEmail(safeData.data.email);
    if (hasEmail) {
        return res.status(400).json({ error: 'Email já existe' });
    }

    let genSlug = true;
    let userSlug = slug(safeData.data.name);
    while (genSlug) {
        const hasSlug = await findUserBySlug(userSlug);
        if (hasSlug) {
            let slugSuffix = Math.floor(Math.random() * 99999).toString();
            userSlug = slug(safeData.data.name + slugSuffix);
        } else {
            genSlug = false;
        }
    }

    const hashPassword = await hash(safeData.data.password, 10);

    const newUser = await createUser({
        slug: userSlug,
        name: safeData.data.name,
        email: safeData.data.email,
        password: hashPassword
    });

    const token = createJWT(userSlug); 

    return res.status(201).json({
        token,
        user: {
            name: newUser.name,
            slug: newUser.slug,
            avatar: newUser.avatar
        }
    });
};
