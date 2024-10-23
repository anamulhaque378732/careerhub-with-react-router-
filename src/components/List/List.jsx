import PropTypes from "prop-types";

const List = ({ list }) => {

    const { logo, category_name, availability } = list;
    return (
        <div className="p-4 rounded-lg  border-2 border-indigo-500/75 ...">
            <img className="my-2" src={logo} alt="" />
            <h2 className="text-2xl font-medium"> {category_name}</h2>
            <h2 className="mt-4"> {availability}</h2>

        </div>
    );
};
List.propTypes = {
    list: PropTypes.object.isRequired
}

export default List;