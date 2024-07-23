import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Anime = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="description">Описание</TabsTrigger>
          <TabsTrigger value="seasons">Сезоны и серии</TabsTrigger>
          <TabsTrigger value="linked">Связанное</TabsTrigger>
        </TabsList>
        <TabsContent value="description">Описание</TabsContent>
        <TabsContent value="seasons">Сезоны и серии</TabsContent>
        <TabsContent value="linked">Связанное</TabsContent>
      </Tabs>
    </div>
  );
};
export default Anime;
