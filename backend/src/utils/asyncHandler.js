export const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    try {
      await requestHandler(req, res, next);
    } catch (error) {
      console.log("ERROR MESSAGE:", error.message);
      console.log("ERROR CAUSE:", error.cause);
      console.log("FULL ERROR:", error);

      return res.status(500).json({
        success: false,
        message: error.message,
        cause: error.cause,
      });
    }
  };
};