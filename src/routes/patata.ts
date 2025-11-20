import { Router } from "express";
import { AuthRequest, VerifyToken } from "../middlewares/verifyToken";


const router = Router();



router.get("/", VerifyToken, (req: AuthRequest, res) => {
    res.json({
        message: "Todo correcto guape",
        user: req.user
    })

})


export default router;
