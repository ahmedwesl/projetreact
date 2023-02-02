import Supplier from "./Supplier";

const suppliers= [
    {
      id: 1,
      name: "Fournisseur 1 ",
      status: true,
      checkedAt: new Date(),
    },
    {
      id: 2,
      name: "Fournisseur 2",
      status: false,
      checkedAt: new Date(),
    },
  ];


  function SupplierList () {
    return (
      <div className="container bg-success">
        <h2 className="mb-4 text-center text-white">Liste des fournisseurs</h2>
        <div className="row">
          {suppliers.map(supplier => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={supplier.id}>
              <Supplier 
                name={supplier.name} 
                checkedAt={supplier.checkedAt.toLocaleDateString} 
                status={supplier.status}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

export default SupplierList