const G1Services = ({ g1Services, onAdd }) => {
  return g1Services.map((service) => {
    var str = service.name + " $" + service.price;
    return (
      <button
        service={service}
        onClick={() => onAdd(service)}
        className="service-btn"
      >
        {str}
      </button>
    );
  });
};

export default G1Services;
