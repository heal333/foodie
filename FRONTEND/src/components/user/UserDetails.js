const UserDetails = ({ accountData }) => {
    return (
        <div className="accountUser">
            <div className="accountLogoNameContainer">
                <div className="accountLogo">
                    {accountData.user[0].toUpperCase()}
                </div>
                <div className="accountName">{accountData.user}</div>
            </div>

            <div className="accountMailDate">
                <div>email: {accountData.email}</div>
                <div>
                    created: {new Date(accountData.created).toDateString()}
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
