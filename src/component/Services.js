const services = ({ services, onAdd }) => {
  return services.map((service) => {
    var str = service.name + " $" + service.price;
    console.log(service);
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

export default services;
