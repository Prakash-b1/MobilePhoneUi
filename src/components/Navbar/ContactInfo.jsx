import direction from '../../assets/direction.svg'
const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 ">
      <span className='flex items-center gap-2'>
        📞
        <div className='flex flex-col'>
          <span>Itel Customer Care</span>
          <span>1800-123-456</span>
        </div>
      </span>
      <span className="flex gap-2 items-center"><img src={direction} alt="" />
        <div className='flex flex-col'>
          <span>Nearby Store</span>
          <span>Get Direction</span>
        </div>
      </span>
    </div>
  );
};

export default ContactInfo;
