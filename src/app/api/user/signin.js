import { connect } from "../../../db.connect";
import { UserModel } from "../../../models/user.model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next";

connect();

export default async function post(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Compare passwords
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    return NextResponse.json({ token, userId: user._id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}






// export default async function handler(req, res) {
// 	const { method } = req;
// 	const { email, password } = req.body;
// 	try {
// 		await connect();
// 	} catch (e) {
// 		console.log(e);
// 	}

// 	if (method === "POST") {
// 		try {
// 			const user = await UserModel.findOne({ email });
// 			if (user) {
// 				if (!(await argon2id.verify(user.password, password))) {
// 					return res.status(401).send({ message: "Invalid password" });
// 				}

// 				const token = jwt.sign(
// 					{ id: user._id, name: user.name, role: user.role },
// 					process.env.TSEC,
// 					{
// 						expiresIn: process.env.TL,
// 					}
// 				);

// 				const refreshToken = jwt.sign(
// 					{ id: user._id, name: user.name, role: user.role },
// 					process.env.RTSEC,
// 					{
// 						expiresIn: process.env.RTL,
// 					}
// 				);

// 				const response = {
// 					status: "Logged in",
// 					token: token,
// 					refreshToken: refreshToken,
// 				};

// 				res.status(200).send(response);
// 			} else {
// 				return res.status(401).send({ message: "User not found" });
// 			}
// 		} catch (e) {
// 			res.status(400).send(e.message);
// 		}
// 	}
// }
