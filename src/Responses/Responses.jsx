import "./responses.css";
import Response from "../Response/Response";
import Loading from "../Loading/Loading";
import { motion } from "framer-motion";
function Responses({ loading, setLoading, responses }) {
  const responsesVariants = {
    visible: {
      opacity: 0,
      scale: 0.1,
      transition: {
        duration: 2,
      },
    },
    hidden: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
      },
    },
  };
  const allResponses = responses.map((elem, idx) => {
    return (
      <motion.div
        initial="visible"
        animate="hidden"
        variants={responsesVariants}
      >
        <Response
          key={`response-${idx}`}
          prompt={elem.prompt}
          response={elem.response}
          engine_name={elem.engine_name}
        />
      </motion.div>
    );
  });

  return (
    <div className="responses-container">
      <hr className="divider"></hr>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <></>
      )}
      {responses.length < 1 ? (
        <motion.div
          initial="visible"
          animate="hidden"
          variants={responsesVariants}
        >
          <h4 style={{ textAlign: "center" }}>
            Go ahead and ask them something. They won't bite.. I don't think..
          </h4>
        </motion.div>
      ) : (
        allResponses
      )}
      <hr className="divider"></hr>
    </div>
  );
}

export default Responses;
