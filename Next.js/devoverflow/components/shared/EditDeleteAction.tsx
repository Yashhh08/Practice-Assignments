"use client";
import Image from "next/image";
import React from "react";

const EditDeleteAction = () => {
  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <div className="flex gap-2">
      <Image
        src={"/assets/icons/edit.svg"}
        alt="edit"
        height={14}
        width={14}
        className="cursor-pointer"
        onClick={handleEdit}
      />
      <Image
        src={"/assets/icons/trash.svg"}
        alt="delete"
        height={14}
        width={14}
        className="cursor-pointer"
        onClick={handleDelete}
      />
    </div>
  );
};

export default EditDeleteAction;
