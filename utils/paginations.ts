import { Model } from "mongoose"

export const paginations = async (
    page: number, 
    limit: number,
    sortType: string,
    Doc: Model<any>, 
    valueQueryParam?: String,
) => {    
    const queryParam = {
        $or: [
          { NAME: { $regex: valueQueryParam?? "", $options: "i" } },
          { ALIAS: { $regex: valueQueryParam?? "", $options: "i" } },
          { PHONE: { $regex: valueQueryParam?? "", $options: "i" } },
          { RUT: { $regex: valueQueryParam?? "", $options: "i" } },
          { STATUS: { $regex: valueQueryParam?? "", $options: "i" } },
        ]
      }
    let query = Doc.find(queryParam).sort(sortType).limit(limit)
    const startIndex = page * limit
    const endIndex = page + 1 * limit
    const totalDocs = await Doc.find(queryParam).countDocuments().exec()
    const totalPages = Math.ceil(totalDocs / limit)


   if(startIndex > 0) {
       /* query = query.where(sortType).gt(startIndex) */
       query = query.skip(startIndex)
   }
   const results = await query.exec()

   const pagination = {
        currentePage: page,
        totalPages,
        totalDocs,
   }

   if(endIndex < totalDocs) {
       pagination.currentePage ++
   }
   if(startIndex > 0) {
       pagination.currentePage --
   }

    return {
        pagination,
        results,
    }
}