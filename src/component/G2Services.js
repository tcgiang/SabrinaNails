const G2Services = ({ g2Services, onAdd }) => {
  return g2Services.map((service) => {
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

export default G2Services;
