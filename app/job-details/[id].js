import { Stack, useRouter, useGlobalSearchParams } from "expo-router"
import { useCallback, useState } from "react"
import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from "react-native"
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn } from "../../components"
import { COLORS, SIZES, icons } from "../../constants"
import useFetch from "../../hook/useFetch"


const JobDetails = () => {


const params = useGlobalSearchParams()
const router = useRouter()


const {data, isLoading, error, refecth} = useFetch('job-detail' ,{
 job_id: params.id
})


return (
  <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>

   <Stack.Screen>


   </Stack.Screen>
  
  
   This is job detail
  
  </SafeAreaView>


 )

}

export default JobDetails