import jwt from "jsonwebtoken";

// token userid ki help se genrate hota hai
const genToken = async (userId) => {
    try {
        const token = await jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return token;
    } catch (error) {
        console.log("Error generating token:", error);
    }
}

export default genToken;