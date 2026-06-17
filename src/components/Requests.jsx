import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequests, removeRequests } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.request);
  const dispatch = useDispatch();

  const reviewRequests = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
      ); // withCredentials: true on App.jsx globally
      dispatch(removeRequests(_id));
    } catch (err) {
      console.log("Requests page error-", err);
    }
  };
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received"); // withCredentials: true on App.jsx globally
      dispatch(addRequests(res?.data?.data));
      console.log("Requests received -", res?.data?.data[0]);
    } catch (error) {
      console.log("Requests page error-", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  console.log("requests from store:", requests);
  if (!requests) return;

  if (requests.length === 0)
    return <h1 className="flex justify-center my-10">No Requests found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Requests</h1>
      {requests.map((request) => {
        const { _id, fromUserId } = request;
        const { firstName, lastName, photoUrl, age, gender, about } =
          fromUserId;
        return (
          <div
            key={_id}
            className="flex justify-between w-2/3 rounded-lg bg-base-300 mx-auto items-center m-4 p-4"
          >
            <div className="flex">
              <div>
                {" "}
                <img
                  src={photoUrl}
                  className="w-20 h-20 rounded-full"
                  alt="photo"
                />
              </div>
              <div className="text-left mx-4">
                <h2 className="font-bold text-xl">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && <p>{age + ", " + gender}</p>} <p>{about}</p>
              </div>
            </div>
            <div className="flex">
              <button
                className="btn btn-primary mx-2"
                onClick={() => reviewRequests("rejected", _id)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary mx-2"
                onClick={() => reviewRequests("accepted", _id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
