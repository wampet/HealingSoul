/* eslint-disable react/prop-types */
import Banner from "../components/Banner";

const links = [
    { name: 'Administration for Children and Families', url: 'https://www.acf.hhs.gov' },
    { name: 'International Council of Nurses', url: 'https://www.icn.ch' },
    { name: 'MedicineNet – Health and Medical Information Produced by Doctors', url: 'https://www.medicinenet.com' },
    { name: 'Home Care Association of America', url: 'https://www.hcaoa.org' },
    { name: 'American Federation for Aging Research', url: 'https://www.infoaging.org' },
    { name: 'The American Geriatrics Society', url: 'https://www.americangeriatrics.org' },
    { name: 'American Health Care Association', url: 'https://www.ahcancal.org' },
    { name: 'Senior Veteran’s Service Alliance', url: 'https://www.veteransaidbenefit.org' },
    { name: 'American Medical Association', url: 'https://www.ama-assn.org' },
    { name: 'Caregiving – Insights, Information, Inspirations', url: 'https://www.caregiving.com' }
  ];

const ResourceLink = ({ name, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className=" hover:bg-green-200 block p-10 bg-white border rounded-md cursor-pointer hover:shadow-lg transition-shadow"
  >
    <h3 className="font-semibold text-xl  ">{name}</h3>
    <p className="text-gray-heading">{url}</p>
  </a>
);

const UsefulLinks = () => {
  return (


    <div>
       <Banner
        title="Useful Links"
        subtitle="Click links below for more info"
        backgroundImage="https://cdn2.hubspot.net/hubfs/747395/How%20to%20Find%20the%20Right%20Assisted%20Senior%20Living%20in%20Greenville%20SC.jpg"
      />

<div className="  px-12 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {links.map((link, index) => (
          <ResourceLink key={index} name={link.name} url={link.url} />
        ))}
      </div>
    </div>
    </div>
   
  );
};

export default UsefulLinks;

