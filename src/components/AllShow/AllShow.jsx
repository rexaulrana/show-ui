import Loader from "../Loader";
import ShowCard from "../ShowCard/ShowCard";
import useShowData from "../../hooks/useShowData";

const AllShow = () => {
  const [shows, isPending, error] = useShowData();
  if (isPending) {
    <Loader></Loader>;
  }
  if (error) {
    //
  }
  return (
    <div>
      <h4 className="text-center p-3">All Shows</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {shows?.map((showItem) => (
          <ShowCard key={showItem?.show?.id} showItem={showItem}></ShowCard>
        ))}
      </div>
    </div>
  );
};

export default AllShow;
