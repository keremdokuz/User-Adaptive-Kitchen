# A wrapper for listing all available microphones using pyaudio
import pyaudio

# PyAudio Microphone List
def list_microphones():
    p = pyaudio.PyAudio()
    info = p.get_host_api_info_by_index(0)
    numdevices = info.get('deviceCount')
    AUDIO_DEVICES = []
    for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:

            device = dict()
            device['index'] = i
            device['description'] = p.get_device_info_by_host_api_device_index(0, i).get('name')
            AUDIO_DEVICES.append(device)

    return AUDIO_DEVICES