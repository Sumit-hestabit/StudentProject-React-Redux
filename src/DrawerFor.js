import React,{useState} from "react";
import {Card,Button,Form,Input, Drawer} from "antd";

const DrawerForm = () =>{
    const [visible,setVisible] = useState(false);

const showDrawer = (type) => {
    setVisible(true);
};

const closeDrawer = () =>{
    setVisible(false);
}

const showEditDrawer = () => {
    setVisible(true);
}
const formitemLayout = {
    labelCol:{
        xs:{
            span:24,
        },
        sm:{
            span:8,
        },
    },
    wrapperCol:{
        xs:{
            span:24,
        },
        sm:{
            span:16,
        },
    },
};

return(
    <div className="container ml-5">
        <div className="row">
            <div style={{padding:"30px",background:"red"}}>
                <Card title="welcome back"border={false} style={{width:500}}>
                    <p><Button type="primary" onClick={showEditDrawer}>Edit</Button></p>
                    
                </Card>
            </div>
        </div>
        <Drawer
        // title={login ? "User login" : " Create a new Account"}
        width={500}
        onClose={closeDrawer}
        visible={visible}
        bodyStyle={{paddingBottom:80}}
        footer={
            <div style={{textAlign:"right"}}>
                <Button onClick={closeDrawer} style={{marginBottom:8}}>
                 Cancel
                </Button>
                <Button onClick={closeDrawer} type="primary">
                 Submit
                </Button>
            </div>
        }
        >

            {
                visible&& (<h>Edit Draw</h>)
            }
        


        </Drawer>
    </div>
);
};

export default DrawerForm;


