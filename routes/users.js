import { user, updateUser, updateSocialNetworks } from '../controllers/user.js'
import express from 'express'

const router = express.Router()
router.get("/:userName", user)
router.patch("/update", updateUser)
router.patch('/social', updateSocialNetworks)
export default router