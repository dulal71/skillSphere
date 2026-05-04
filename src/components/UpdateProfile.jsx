"use client";
import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

const UpdateProfile = () => {
 const submit =async (e) => {
  e.preventDefault();
const name = e.target.name.value;
  const image = e.target.image.value;
 console.log(name,image);
  await authClient.updateUser({
   
    name: name,
     image: image,
})
  
};
    return (
         <Modal>
      <Button variant="secondary">Update Profile <BiEdit></BiEdit></Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Your Profile</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={submit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input name="name" placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image URL</Label>
                    <Input name="image" placeholder="image url" />
                  </TextField>
                  <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Update</Button>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default UpdateProfile;