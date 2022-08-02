import React from 'react';
import {GetDataNew} from "../../baseComponents/baseFunctions";
import {useParams} from "react-router-dom";

const InviteGroup = () => {
    let course_id = useParams("id")
    async function redirect() {
        let dataa = await GetDataNew("/invitation_vk_link?course_id="+ course_id.id, false)
        window.location.href = dataa.vk_group_link
    }

    redirect()
    return (
        <div>

        </div>
    );
};

export default InviteGroup;