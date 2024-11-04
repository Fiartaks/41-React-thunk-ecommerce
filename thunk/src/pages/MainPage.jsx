import { useEffect } from "react";
import {
  getProducts
  
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Card from "../components/Card";
import { getBasket } from "../redux/actions/basketActions";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.product);

  useEffect(() => {
   // dispatch(setLoading());
    //axios
      //.get("http://localhost:3050/products")
      
     // .then((res) => dispatch(setProducts(res.data)))
    //  .catch((err) => dispatch(setError(err)));
    dispatch(getProducts())
    dispatch(getBasket())
  }, []);

  return (
    <div>
      {state.isLoading && <Loading />}

      {state.isError && (
        <p className="text-center my-5 fw-bold">
          Üzgünüz, verileri alırken bir hata oluştu: <br />
          {state.isError}
        </p>
      )}

<div className="d-flex flex-wrap gap-5 justify-content-center my-5">
{state.products.map((product,i) => (
        <Card key={i} product={product}/>
      ))}

</div>

      
    </div>
  );
};

export default MainPage;
