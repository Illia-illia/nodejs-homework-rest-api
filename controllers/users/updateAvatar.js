const { User } = require('../../models');
const path = require('path');
const fs = require('fs/promises');
const avatarDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (res, req) => {
  const { path: tempUpload, originalname } = req.file;

  try {
    const resultUpload = path.join(avatarDir, originalname);

      await fs.rename(tempUpload, resultUpload);
      const 
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
