import { Navbar } from "./navbar";
import { useNavigate } from "react-router-dom";

export const Selection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed-top">
        <Navbar />
      </div>
      <div className="container" style={{ marginTop: "20%" }}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 mb-4">
            <div className="p-5 card shadow h-100">
              <div className="p-3 text-center">
                <h4>Assign Project</h4>
                <button
                  className="btn btn-danger fw-bold mt-3 w-100"
                  onClick={() => navigate("/assign")}
                >
                  Assign
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 mb-4">
            <div className="p-5 card shadow h-100">
              <div className="p-3 text-center">
                <h4>Work on Project</h4>
                <button
                  className="btn btn-danger fw-bold mt-3 w-100"
                  onClick={() => navigate("/task")}
                >
                  Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
