export function getAllNotes(req,res){
    res.status(200).send("HERE YOU GO!!!");
}

export function createNotes(req,res){
    res.status(201).json({message: "post created"});
}

export function updateNotes(req,res){
    res.status(200).json({message: "post updated"});
}

export function deleteNotes(req,res){
    res.status(200).json({message: "post deleted"});
}

