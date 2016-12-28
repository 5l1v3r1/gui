import {ModelDescriptorService} from "../service/model-descriptor-service";
import {EventDispatcherService} from "../service/event-dispatcher-service";
import {VmRepository} from 'core/repository/vm-repository';
import _ = require("lodash");
import {AbstractRoute} from "./abstract-route";

export class VmsRoute extends AbstractRoute {
    private static instance: VmsRoute;

    private constructor(private modelDescriptorService: ModelDescriptorService,
                        eventDispatcherService: EventDispatcherService,
                        private vmRepository: VmRepository) {
        super(eventDispatcherService);
    }

    public static getInstance() {
        if (!VmsRoute.instance) {
            VmsRoute.instance = new VmsRoute(
                ModelDescriptorService.getInstance(),
                EventDispatcherService.getInstance(),
                VmRepository.instance
            );
        }
        return VmsRoute.instance;
    }

    public get(vmId: string, stack: Array<any>) {
        let self = this,
            objectType = 'Vm',
            columnIndex = 1,
            parentContext = stack[columnIndex-1],
            context: any = {
                columnIndex: columnIndex,
                objectType: objectType,
                parentContext: parentContext,
                path: parentContext.path + '/vm/_/' + vmId
            };
        return Promise.all([
            this.vmRepository.listVms(),
            this.modelDescriptorService.getUiDescriptorForType(objectType)
        ]).spread(function(vms, uiDescriptor) {
            context.object = _.find(vms, {id: vmId});
            context.userInterfaceDescriptor = uiDescriptor;

            return self.updateStackWithContext(stack, context);
        });
    }

    public getReadme(stack: Array<any>) {
        let self = this,
            objectType = 'VmReadme',
            columnIndex = 2,
            parentContext = stack[columnIndex-1],
            context: any = {
                columnIndex: columnIndex,
                objectType: objectType,
                parentContext: parentContext,
                path: parentContext.path + '/readme'
            };
        return Promise.all([
            this.modelDescriptorService.getUiDescriptorForType(objectType)
        ]).spread(function(uiDescriptor) {
            context.object = parentContext.object._readme;
            context.userInterfaceDescriptor = uiDescriptor;

            return self.updateStackWithContext(stack, context);
        });
    }

    public getDevices(stack: Array<any>) {
        let self = this,
            objectType = 'VmDevice',
            columnIndex = 2,
            parentContext = stack[columnIndex-1],
            context: any = {
                columnIndex: columnIndex,
                objectType: objectType,
                parentContext: parentContext,
                path: parentContext.path + '/devices'
            };
        return Promise.all([
            this.modelDescriptorService.getUiDescriptorForType(objectType)
        ]).spread(function(uiDescriptor) {
            context.object = _.forEach(parentContext.object._nonVolumeDevices, (device) => device._objectType = objectType);
            context.userInterfaceDescriptor = uiDescriptor;

            return self.updateStackWithContext(stack, context);
        });
    }

    public getDevice(deviceId: string, stack: Array<any>) {
        let self = this,
            objectType = 'VmDevice',
            columnIndex = 3,
            parentContext = stack[columnIndex-1],
            context: any = {
                columnIndex: columnIndex,
                objectType: objectType,
                parentContext: parentContext,
                path: parentContext.path + '/vm-device/_/' + deviceId
            };
        return Promise.all([
            this.modelDescriptorService.getUiDescriptorForType(objectType)
        ]).spread(function(uiDescriptor) {
            context.object = _.find(parentContext.object, {id: deviceId};
            context.userInterfaceDescriptor = uiDescriptor;

            return self.updateStackWithContext(stack, context);
        });
    }

    public getVolumes(stack: Array<any>) {
        let self = this,
            objectType = 'VmVolume',
            columnIndex = 2,
            parentContext = stack[columnIndex-1],
            context: any = {
                columnIndex: columnIndex,
                objectType: objectType,
                parentContext: parentContext,
                path: parentContext.path + '/volumes'
            };
        return Promise.all([
            this.modelDescriptorService.getUiDescriptorForType(objectType)
        ]).spread(function(uiDescriptor) {
            context.object = _.forEach(parentContext.object._volumeDevices, (device) => device._objectType = objectType);
            context.userInterfaceDescriptor = uiDescriptor;

            return self.updateStackWithContext(stack, context);
        });
    }

    public getVolume(volumeId: string, stack: Array<any>) {
        let self = this,
            objectType = 'VmVolume',
            columnIndex = 3,
            parentContext = stack[columnIndex-1],
            context: any = {
                columnIndex: columnIndex,
                objectType: objectType,
                parentContext: parentContext,
                path: parentContext.path + '/vm-volume/_/' + volumeId
            };
        return Promise.all([
            this.modelDescriptorService.getUiDescriptorForType(objectType)
        ]).spread(function(uiDescriptor) {
            context.object = _.find(parentContext.object, {id: volumeId};
            context.userInterfaceDescriptor = uiDescriptor;

            return self.updateStackWithContext(stack, context);
        });
    }

}