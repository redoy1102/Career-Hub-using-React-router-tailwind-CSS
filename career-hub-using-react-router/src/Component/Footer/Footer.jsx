import {NavLink} from "react-router-dom";

const Footer = () => {
    const footerHeaders = [
        ["Company", "About Us", "Work", "Latest News", "Careers"],
        ["Product", "Prototype", "Plans & Pricing", "Customers", "Integrations"],
        ["Support", "Help Desk", "Sales", "Become a Partner", "Developers"],
        ["Contact", "524 Broadway" , "+1777-978-5570"]
    ]

    const handleFooterSection = (footerElements) =>{
            return footerElements.map((item, index) => {
                if(index === 0){
                    return <h6 className="text-white font-semibold text-[20px]" key={index}>{item}</h6>
                }
                else{
                    return <NavLink className="link link-hover text-base" key={index}>{item}</NavLink>
                }
            })
    }

    return (
        <footer className="footer bg-neutral text-neutral-content p-10">
            <aside>
                <p className="font-extrabold text-3xl text-white">CareerHub</p>
                <p className="text-base">There are many variations of passages of Lorem Ipsum , but the majority have
                    suffered alteration in some form.</p>
            </aside>
            {
                footerHeaders.map((footerElement, index) => <nav key={index}>{handleFooterSection(footerElement)}</nav>)
            }
        </footer>
    );
};

export default Footer;