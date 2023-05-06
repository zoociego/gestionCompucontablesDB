import { Model } from "mongoose"

export const paginations = async (
    page: number, 
    limit: number,
    sortType: string,
    Doc: Model<any>, 
    queryParam?: any,
) => {    
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const totalDocs = await Doc.countDocuments().exec()
    const totalPages = Math.ceil(totalDocs / limit)

   let query = Doc.find(queryParam).sort(sortType).limit(limit)

   if(startIndex > 0) {
       query = query.where(sortType).gt(startIndex)
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