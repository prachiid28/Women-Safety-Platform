const volunteerOnly = (req, res, next) => {
  if (req.user.role !== "volunteer") {
    return res.status(403).json({
      message: "Access denied",
    });
  }

  next();
};

export default volunteerOnly;