from cars.viewsets import CarViewset, CarNamesViewset
from client.viewsets import ClientViewset, ClientNamesViewset
from seg.viewsets import SegViewset, SegNamesViewset
from services.viewsets import ServiceViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('veiculo',CarViewset)
router.register('cliente', ClientViewset)
router.register('seguradora', SegViewset)
router.register('locacao', ServiceViewset)
router.register('clienteNames', ClientNamesViewset)
router.register('carNames', CarNamesViewset)
router.register('segNames', SegNamesViewset)

